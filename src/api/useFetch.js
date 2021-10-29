export const fetchApi = {
  fetch: async (query) => {
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      return res.json();
    } catch (err) {
      console.error("Failed while fetching data");
      // return { data: err.message };
    }
  },
  fetchRepo: async (query) => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${query}/repos?per_page=6&sort=created:asc`
      );
      return res.json();
    } catch (error) {
      console.error("Failed while fetching data");
    }
  },
};
