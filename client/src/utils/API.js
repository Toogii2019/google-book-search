import axios from 'axios';

export const getBooksOnline = searchStr => axios.get("/api/getonlinebooks/" + searchStr);
export const saveBooksDB = data => axios.post("/api/save", data);
export const getBooksDB = () => axios.get("/api/books");
export const deleteBooksDB = onlineId => axios.delete("/api/delete/" + onlineId);