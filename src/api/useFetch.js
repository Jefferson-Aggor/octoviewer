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
};
