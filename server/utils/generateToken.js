import jwt from 'jsonwebtoken'

const jwtSecretKey = "myjwtsecretphrase"

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, jwtSecretKey, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 7 *24 * 60 *60 * 1000,
        httpOnly: true
    })

    return token;
}