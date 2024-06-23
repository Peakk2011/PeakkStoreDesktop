import eel 
import io
import sys

eel.init('web')

stream = io.StringIO()
sys.stdout = stream
sys.stderr = stream

@eel.expose
def python():
    pass

eel.start('index.html', mode='chrome' , cmdline_args=['--kiosk'])
# , cmdline_args=['--kiosk']