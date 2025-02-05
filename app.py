from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

# Configurações do servidor de e-mail (use SMTP do Gmail, Outlook, etc.)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Servidor SMTP do Gmail
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'danielbernardo18sr@gmail.com'  # Seu e-mail
app.config['MAIL_PASSWORD'] = 'oand ruic ooje yeoy'  # Sua senha (ou app password)

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')  # Seu HTML principal

@app.route('/enviar-email', methods=['POST'])
def enviar_email():
    nome = request.form['nome']
    email = request.form['email']
    mensagem = request.form['mensagem']

    msg = Message('Nova Mensagem do Site', sender=email, recipients=['danielbernardo18sr@gmail.com'])
    msg.body = f'Nome: {nome}\nE-mail: {email}\nMensagem:\n{mensagem}'

    mail.send(msg)
    return 'Mensagem enviada com sucesso!'

if __name__ == '__main__':
    app.run(debug=True)
