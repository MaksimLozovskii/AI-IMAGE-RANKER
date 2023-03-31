from flask import Flask, render_template, send_file, request
import random

app = Flask(__name__)

def createNewUrl():
        linkOne = random.randint(1, 320)
        linkTwo = random.randint(1, 320)
        linkThree = random.randint(1, 320)
        linkFour = random.randint(1, 320)
        linkFive = random.randint(1, 320)

        return f"https://ai-image-ranker.vercel.app?pathOne=https%3A%2F%2Fmaximlozovsky.pythonanywhere.com%2Fapi%2F{linkOne}&pathTwo=https%3A%2F%2Fmaximlozovsky.pythonanywhere.com%2Fapi%2F{linkTwo}&pathThree=https%3A%2F%2Fmaximlozovsky.pythonanywhere.com%2Fapi%2F{linkThree}&pathFour=https%3A%2F%2Fmaximlozovsky.pythonanywhere.com%2Fapi%2F{linkFour}&pathFive=https%3A%2F%2Fmaximlozovsky.pythonanywhere.com%2Fapi%2F{linkFive}&topLabel=top&botLabel=bottom"

@app.route('/')
def send_index():
    return render_template("index.html", url = createNewUrl())

@app.route('/api/result', methods=['GET'])
def recieve_result():

    args = request.args

    imgOne = args.get("img1")
    imgTwo = args.get("img2")
    imgThree = args.get("img3")
    imgFour = args.get("img4")
    imgFive = args.get("img5")
    topLabel = args.get("top")
    botLabel = args.get("bot")

    return render_template('results.html', imgOne=imgOne, imgTwo=imgTwo,imgThree=imgThree, imgFour=imgFour, imgFive=imgFive, topLabel=topLabel, botLabel=botLabel, url = createNewUrl())

@app.route('/api/<imgID>')
def send_image(imgID):
    return send_file("./static/img/" + str(imgID) +".jpg")

if __name__ == "__main__":
    app.run(debug=True)