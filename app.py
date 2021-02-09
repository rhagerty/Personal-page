from flask import Flask, request, render_template, jsonify, session
from boggle import Boggle

app = Flask(__name__)
app.config["SECRET_KEY"] = "nevertell"

boggle_game = Boggle()


@app.route("/")
def landing_page():
    """Show landing page."""
 
    return render_template("home.html")

@app.route("/display-resume")
def display_resume():
    """Show resume."""

    return render_template("resume.html")

@app.route("/display-about")
def display_about():
    """Show about me section."""

    return render_template("about.html")

@app.route("/display-portfolio")
def display_portfolio():
    """Show portfolio section."""

    return render_template("portfolio.html")

# Boggle Routes
@app.route("/display-boggle")
def display_boggle():
    """Show board."""

    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    return render_template("boggle.html", board=board,
                           highscore=highscore,
                           nplays=nplays, scrollToAnchor='boggle')


@app.route("/check-word")
def check_word():
    """Check if word is in dictionary."""

    word = request.args["word"]
    board = session["board"]
    response = boggle_game.check_valid_word(board, word)

    return jsonify({'result': response})


@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update nplays, update high score if appropriate."""

    score = request.json["score"]
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    session['nplays'] = nplays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)

# Connect4 Routes


@app.route("/display-connect")
def display_connect():
    """Show board."""

    return render_template("connect4.html", scrollToAnchor='connect4')

# jeopardy routes


@app.route("/display-jeopardy")
def display_jeopardy():
    """Show board."""
  
    return render_template("jeopardy.html", scrollToAnchor='jeopardy')
