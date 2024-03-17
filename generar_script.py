import re
import random

# Función para leer archivos .txt
def leer_archivo(archivo):
    with open(archivo, 'r', encoding='utf-8') as f:
        return f.read()

# Leer script y sonetos
ruta_script = 'Resources/script.txt'
ruta_sonetos = 'Resources/cien_sonetos_de_amor.txt'
script = leer_archivo(ruta_script)
sonetos = leer_archivo(ruta_sonetos)

# Crear lista aleatoria de sonetos
sonetos = re.split(r'Soneto \w+', sonetos)[1:]
sonetos = [soneto.strip() for soneto in sonetos]
random.shuffle(sonetos)

# Crear mensajes (sonetos y emojis)
emojis='🌸💖🌺😻🌹😍🌻🥰🌷'
sonetos_final = ['*Hecho con ❤️ by Sandreke*\n\n']

for i, soneto in enumerate(sonetos):
    soneto_emoji= f'{soneto}\n\n{emojis[i % 9]}\n\n'
    sonetos_final.append(soneto_emoji)
mensajes = ''.join(sonetos_final)

# Crear script final
ini = script.find('t(`') + len('t(`')
fin = script.rfind('`)', 0, script.rfind('`)'))
script_final = script[:ini] + mensajes + script[fin:]

# Guardar script final en archivo .txt
ruta_final = 'script_final.js'
with open(ruta_final, 'w', encoding='utf-8') as f:
    f.write(script_final)