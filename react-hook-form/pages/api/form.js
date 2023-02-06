export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // ***Check to see if all of the input are filled out
    // ***If form isn't completely fille dout, send a HTTP bad request error code
    // ***Afterwards, check to make sure title, symbol, and descritption pass validation
    // ***if not, return status of 400 with error code

    if (!body.title || !body.symbol || !body.price || !body.description || !body.category) {
        return res.status(400).json({ data: 'Asset information incomplete', id: 0 })
    }
    else if (body.title.length > 255 || body.title.length < 3) {
        return res.status(400).json({ data: 'Please adjust character count of title to fit requirements', id: 0 })
    } else if (body.symbol.length > 8 || body.symbol.length < 2) {
        return res.status(400).json({ data: 'Please adjust character count of symbol to fit requirements', id: 0 })
    } else if (body.description.length > 200) {
        return res.status(400).json({ data: 'Please adjust character count of description to fit requirements', id: 0 })
    }
    // If form is good to go, sends a HTTP success code
    res.status(200).json({ data: `${body.title} ${body.symbol} ${body.description} ${body.category}` })
}
