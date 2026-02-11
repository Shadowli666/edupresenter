import pandas as pd
import json
import os

def extract_plan():
    input_file = 'content/plan.xlsx'
    output_file = 'content/plan.json'

    if not os.path.exists(input_file):
        print(f"Error: File {input_file} not found.")
        return

    try:
        # Read all sheets
        xls = pd.ExcelFile(input_file)
        all_data = {}
        
        for sheet_name in xls.sheet_names:
            df = pd.read_excel(xls, sheet_name=sheet_name)
            # Convert to list of dicts, handling NaN values
            data = df.where(pd.notnull(df), None).to_dict(orient='records')
            all_data[sheet_name] = data
            
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(all_data, f, indent=2, ensure_ascii=False)
            
        print(f"Successfully converted {input_file} to {output_file}")
        
    except ImportError as e:
        print("Error: Missing required libraries. Please run: pip install pandas openpyxl")
        print(f"Details: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    extract_plan()
