import json
import os
import re
import glob

def parse_plan(json_file):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    schedule = {}
    
    for sheet_name, rows in data.items():
        # Clean sheet name
        subject = sheet_name.strip()
        schedule[subject] = []
        
        for i, row in enumerate(rows):
            # Check if this row represents a week
            week_val = row.get("Unnamed: 1")
            if week_val and isinstance(week_val, str) and week_val.startswith("Nro."):
                week_num = week_val.replace("Nro.", "").strip()
                
                content = row.get("Unnamed: 8")
                objectives = row.get("Unnamed: 5")
                evaluation = row.get("Unnamed: 18")
                
                schedule[subject].append({
                    "week": week_num,
                    "content": content,
                    "objectives": objectives,
                    "evaluation": evaluation
                })
                
    return schedule

def parse_slides(data_dir):
    slides_info = {}
    
    files = glob.glob(os.path.join(data_dir, "*.ts"))
    
    for file_path in files:
        filename = os.path.basename(file_path)
        # Determine subject based on filename prefix
        if filename.startswith("pnn_module"):
            subject = "Pensamiento No Numérico" # Guessing mapping
            module_num = filename.replace("pnn_module", "").replace(".ts", "")
        elif filename.startswith("prog_module"):
            subject = "Programación" # Guessing mapping
            module_num = filename.replace("prog_module", "").replace(".ts", "")
        elif filename.startswith("python_module"):
            subject = "Python" # Guessing mapping
            module_num = filename.replace("python_module", "").replace(".ts", "")
        elif filename.startswith("module"):
            subject = "Computación Básica" # Guessing mapping
            module_num = filename.replace("module", "").replace(".ts", "")
        else:
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract title
        title_match = re.search(r"title:\s*['\"](.*?)['\"]", content)
        title = title_match.group(1) if title_match else "Unknown Title"
        
        # Extract description
        desc_match = re.search(r"description:\s*['\"](.*?)['\"]", content)
        description = desc_match.group(1) if desc_match else "Unknown Description"
        
        # Check for structure elements
        has_theory = "Definiciones" in content or "Concepto" in content or "Teoría" in content
        has_practice = "Práctica" in content or "Ejercicio" in content or "Quiz" in content
        has_questions = "¿Preguntas?" in content or "Dudas" in content
        has_thanks = "Gracias" in content
        
        if subject not in slides_info:
            slides_info[subject] = {}
            
        slides_info[subject][module_num] = {
            "file": filename,
            "title": title,
            "description": description,
            "structure": {
                "theory": has_theory,
                "practice": has_practice,
                "questions": has_questions,
                "thanks": has_thanks
            }
        }
        
    return slides_info

def compare_and_report(plan, slides):
    report = []
    
    # Map plan subjects to slide subjects
    # Plan keys: "Estructura de Datos ", "Pensamiento No Numérico ", etc.
    # Slide keys: "Computación Básica", "Pensamiento No Numérico", "Programación", "Python"
    
    # We need to figure out the mapping.
    # Let's print available keys first to debug
    report.append("--- Available Plan Subjects ---")
    for k in plan.keys():
        report.append(f"- '{k}'")
    report.append("\n--- Available Slide Subjects ---")
    for k in slides.keys():
        report.append(f"- '{k}'")
    report.append("\n")

    # Manual mapping based on observation
    mapping = {
        "Estructura de Datos": "Programación", 
        "Programación No Numérica II": "Pensamiento No Numérico", # pnn_module starts with pnn, script mapped it to "Pensamiento No Numérico"
        "Semestral Intro a Comp": "Computación Básica",
        "Programación en Python": "Python"
    }
    
    for plan_subject, weeks in plan.items():
        clean_subject = plan_subject.strip()
        slide_subject = mapping.get(clean_subject, clean_subject)
        
        # Try to find a match in slides
        matched_slide_subject = None
        for s in slides.keys():
            if s in slide_subject or slide_subject in s:
                matched_slide_subject = s
                break
        
        if not matched_slide_subject:
            report.append(f"Subject '{clean_subject}' found in plan but no corresponding slides found (looked for '{slide_subject}').")
            continue
            
        report.append(f"### Subject: {clean_subject} (Slides: {matched_slide_subject})")
        
        slide_modules = slides[matched_slide_subject]
        
        for week in weeks:
            week_num = week['week']
            content = week['content']
            
            report.append(f"- Week {week_num}: {content}")
            
            # Check if module exists
            if week_num in slide_modules:
                module = slide_modules[week_num]
                report.append(f"  ✅ Slide Module Found: {module['file']}")
                report.append(f"     Title: {module['title']}")
                report.append(f"     Structure: Theory={module['structure']['theory']}, Practice={module['structure']['practice']}, Q&A={module['structure']['questions']}, Thanks={module['structure']['thanks']}")
            else:
                report.append(f"  ❌ No slide module found for week {week_num}")
        
        report.append("\n")
        
    return "\n".join(report)

if __name__ == "__main__":
    plan = parse_plan('content/plan.json')
    slides = parse_slides('data')
    report = compare_and_report(plan, slides)
    
    print(report)
    
    with open('comparison_report.txt', 'w', encoding='utf-8') as f:
        f.write(report)
