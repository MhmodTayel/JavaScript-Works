class Github {
  constructor() {
    this.client_id = "9abcbdd0b3b2a45d5214";
    this.client_secret = "aeb329c571a205fe14e7ca2dbbb75366eb85fa03";
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
