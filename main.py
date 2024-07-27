# Peakk eel python from peakk store update 3/7/24

import eel 
import io
import sys

eel.init('Website')

stream = io.StringIO()
sys.stdout = stream
sys.stderr = stream

@eel.expose
def python():
    pass

eel.start('Startup.html', mode='chrome', size=(355, 800))