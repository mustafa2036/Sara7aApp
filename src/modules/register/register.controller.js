import { User } from "../../../database/model/user.model.js"


export const registerMessage = (req, res) => {
    res.render('register', { error: req.query.error, session: null })
}

export const handleRegister = async (req, res) => {
    let isUser = User.findOne({ email: req.body.email });
    if(isUser) return res.redirect('/register');
    await User.insertMany(req.body)

    res.redirect('/login')
}