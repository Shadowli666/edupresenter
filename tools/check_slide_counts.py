import os
import glob
import re

def count_slides_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the slides array
    match = re.search(r'slides:\s*\[(.*?)\]', content, re.DOTALL)
    if not match:
        return 0
    
    slides_content = match.group(1)
    # Count occurrences of "id:" or "title:" inside the slides array to estimate slide count
    # Using "id:" is safer as every slide has an id
    slide_count = len(re.findall(r'\bid:\s*[\'"]', slides_content))
    return slide_count

def check_all_modules():
    data_dir = 'data'
    files = glob.glob(os.path.join(data_dir, '*.ts'))
    
    report = []
    short_modules = []
    
    print(f"{'Module':<30} | {'Slides':<10} | {'Status':<10}")
    print("-" * 55)
    
    for file_path in sorted(files):
        filename = os.path.basename(file_path)
        count = count_slides_in_file(file_path)
        
        status = "✅ OK" if count >= 12 else "❌ SHORT"
        print(f"{filename:<30} | {count:<10} | {status}")
        
        if count < 12:
            short_modules.append((filename, count))
            
    return short_modules

if __name__ == "__main__":
    short_modules = check_all_modules()
    if short_modules:
        print(f"\nFound {len(short_modules)} modules with fewer than 12 slides.")
    else:
        print("\nAll modules have at least 12 slides.")
