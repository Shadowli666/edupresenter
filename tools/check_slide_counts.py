import os
import glob
import re

# Raíz del proyecto (este archivo vive en tools/)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
MIN_SLIDES = 12


def count_slides_in_file(file_path):
    """Devuelve el número de slides de un módulo, o None si el archivo no es un módulo.

    Los placeholders (p. ej. `export {};`) no declaran `slides` y se omiten.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'slides' not in content:
        return None

    # Arreglo `slides` completo: greedy hasta el último `]` antes del cierre del objeto
    match = re.search(r'slides:\s*\[(.*)\]\s*\}', content, re.DOTALL)
    if not match:
        return 0

    # Cada slide tiene un `id:` entre comillas
    return len(re.findall(r"\bid:\s*['\"]", match.group(1)))


def check_all_modules():
    # Incluye subdirectorios: data/intro, data/prog, data/pnn, data/python
    files = sorted(glob.glob(os.path.join(DATA_DIR, '**', '*.ts'), recursive=True))

    short_modules = []
    skipped = []

    print(f"{'Módulo':<42} | {'Slides':<6} | Estado")
    print("-" * 62)

    for file_path in files:
        rel = os.path.relpath(file_path, BASE_DIR)
        count = count_slides_in_file(file_path)

        if count is None:
            skipped.append(rel)
            continue

        status = "OK" if count >= MIN_SLIDES else "CORTO"
        print(f"{rel:<42} | {count:<6} | {status}")

        if count < MIN_SLIDES:
            short_modules.append((rel, count))

    print("-" * 62)
    print(f"Total de módulos: {len(files) - len(skipped)} | placeholders omitidos: {len(skipped)}")

    if short_modules:
        print(f"\n{len(short_modules)} módulo(s) con menos de {MIN_SLIDES} slides:")
        for name, count in short_modules:
            print(f"  - {name}: {count}")
    else:
        print(f"\nTodos los módulos tienen al menos {MIN_SLIDES} slides.")

    return short_modules


if __name__ == "__main__":
    check_all_modules()
