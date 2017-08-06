import axios from 'axios';

export default class GetMovies {
    constructor(onSuccess) {
        this.onSuccess = onSuccess;
    }

    get() {
        axios.get('/api/movies.json')
            .then(this.onSuccess)
            .catch(function (error) {
                console.log(error);
            });
    }
}