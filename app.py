from flask import Flask, render_template

app = Flask(__name__)
app.config["SECRET_KEY"] = "nevertell"

@app.route("/")
def homepage():
    """Show landing page."""

    return render_template("/templates/home.html")

@app.route("/display-contact-info")
def display_contact_info():
    return render_template("/templates/contact-info.html")

@app.route("/display-resume")
def display_resume():
    return render_template("/templates/resume.html")

@app.route("/display-portfolio")
def display_portfolio():
    return render_template("/templates/portfolio.html")

@app.route("/display-about")
def display_about():
    return render_template("/templates/aboutme.html")