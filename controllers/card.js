const Card = require('../models/cards')
module.exports.createCard = (req, res) => {
    const {number, expiry, cvv, amount} = req.body
    Card.create({number, expiry, cvv, amount})
        // .then(card => res.json(`RequestId: ${card._id} , amount: ${card.amount}`))
        .then(card => res.json(card))
        // Не смог понять , как сделать , чтоб сервер отправлял только id и amount. Решил сделать на стороне клиента
        .catch(err => res.status(500).send({message: 'Произошла ошибка'}))
}
