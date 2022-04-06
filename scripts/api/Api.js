class PhotographerApi {
    constructor(url){
        this._url = url
    }

    async getPhotographers() {
        return await fetch(this._url)
                     .then(res => res.json())
                     .then(res => res.photographers)
                     .catch(err => console.log('an error occurs', err))
    }
}

class MediaApi {
    constructor(url){
        this._url = url
    }

    async getMedias() {
        return await fetch(this._url)
                     .then(res => res.json())
                     .then(res => res.media)
                     .catch(err => console.log('an error occurs', err))
    }
}