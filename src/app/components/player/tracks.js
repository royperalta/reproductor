
export async function tracks() {
    try {
      const response = await fetch('http://localhost:20000/api/info');
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  }
  