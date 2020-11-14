class Github {
  constructor() {
    this.client_id = "7c1412989855e51b157d";
    this.client_secret = "141c7ecf6a624160b3b16fc61c1f1127df10170c";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
