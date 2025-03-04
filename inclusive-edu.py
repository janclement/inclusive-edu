from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Change this to your actual image folder
IMAGE_FOLDER = r"C:\Users\Jan\Downloads\MyStuff\Academics 6\Software Development\inclusive-edu"
app.config["IMAGE_FOLDER"] = IMAGE_FOLDER

@app.route("/")
def splash():
    return render_template("splash.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")  # Make sure dashboard.html is inside /templates

@app.route("/local-image/<filename>")
def get_local_image(filename):
    return send_from_directory(app.config["IMAGE_FOLDER"], filename)

if __name__ == "__main__":
    app.run(debug=True)
