import { apiUrl } from "./config";
import axios from "axios";

export default {
    announcement: {
        resourceUrl: "announcement",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}?expand`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    good: {
        resourceUrl: "goods",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    }
};

// export default {
//     good: {
//         resourceUrl: "good",
//         getAll() {
//             return axios({
//                 url: `${apiUrl}/${this.resourceUrl}`,
//                 method: "GET"
//             });
//         },
//         getOne(id) {
//             return axios({
//                 url: `${apiUrl}/${this.resourceUrl}/${id}`,
//                 method: "GET"
//             });
//         },
//         add(item) {
//             return axios({
//                 url: `${apiUrl}/${this.resourceUrl}`,
//                 method: "POST",
//                 data: item
//             });
//         },
//         edit(id, item) {
//             return axios({
//                 url: `${apiUrl}/${this.resourceUrl}/${id}`,
//                 method: "PUT",
//                 data: item
//             });
//         },
//         delete(id) {
//             return axios({
//                 url: `${apiUrl}/${this.resourceUrl}/${id}`,
//                 method: "DELETE"
//             });
//         }
//     }
// };
