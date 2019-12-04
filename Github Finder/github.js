class GitHub {
    constructor() {
        this.client_id = 'f287bb713cf6ad2af73d';
        this.client_secret = '83c98dade108abb5a16cc18678a1140ce4966a99';
    }

    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}