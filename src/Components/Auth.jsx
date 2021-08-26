class auth {
    constructor(){
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        callback();
    }

    logout(callback) {
        this.authenticated = false;
        callback();
    }
    isAuthenticated(){
        return this.authenticated;
    }
}

