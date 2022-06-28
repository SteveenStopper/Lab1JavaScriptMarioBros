# Importa las librerias de flask
from flask import Flask, render_template
# Nos permite acceder a funcionalidades dependientes del Sistema Operativo.
import os 


# Inicializar la aplicacion
app = Flask(__name__, template_folder='templates\layouts')
app._static_folder = os.path.abspath("templates/static/")

#Ruta para llamara a la pagina principal.
@app.route('/')
def principal():
    return render_template('Principal.html')

#Ruta para llamara a la pagina del juego.
@app.route('/Juego')
def juegoMB():
    return render_template('JuegoMarioB.html')

if __name__ == '__main__':
    app.run(debug=True) # Para ejecutar la aplicacion