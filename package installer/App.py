import eel
eel.init("Frontend", allowed_extensions=['.js', '.html'])
eel.start("index.html", size=(1600, 900))
# eel.start('index.html', mode='chrome', cmdline_args=['--kiosk'])