from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/features')
def features():
    return render_template('features.html')

@app.route('/lda_bow')
def lda_bow():
    return render_template('lda_bow.html')

@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

@app.route('/future')
def future():
    return render_template('future.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
