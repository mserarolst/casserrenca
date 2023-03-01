import axios from "axios";
import moment from "moment";

const url = "http://localhost:8000/api/";

const Login = async (email, password) => {
	let message;
	await axios
		.post(url + "login", {
			email: email,
			password: password,
			remember_me: true,
		})
		.then((response) => {
			if (response.status === 200) {
				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem("user", JSON.stringify(response.data));
				message = "Login amb èxit";
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "error";
			}
		})
		.catch((error) => {
			message = "error";
			console.log(error);
		});

	return message;
};

const registreAdministrador = async (values) => {
	let message;
	await axios
		.post(url + "registreAdministrador", values)
		.then((response) => {
			if (response.status === 200) {
				message = "Usuari creat";
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "error";
			}
		})
		.catch((error) => {
			message = "error";
			console.log(error);
		});

	return message;
};

const registreJugador = async (values) => {
	let message;
	await axios
		.post(url + "registreJugador", values)
		.then((response) => {
			if (response.status === 200) {
				message = "Usuari creat";
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "error";
			}
		})
		.catch((error) => {
			message = "error";
			console.log(error);
		});

	return message;
};

const getUser = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let data;
	let config = {
		headers: {
			Accept: "application/json",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.get(url + "user", config)
		.then((response) => {
			if (response.status === 200) {
				message = response.status;
				data = response.data;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "401";
			}
		})
		.catch((error) => {
			if (error.response.status === 401) {
				localStorage.removeItem("user");
			}
		});
	return { message, data };
};

const logout = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let get_user;
	let config = {
		headers: {
			Accept: "application/json",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.get(url + "logout", config)
		.then((response) => {
			if (response.status === 200) {
				get_user = response.data;
				message = "400";
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "401";
			}
		})
		.catch((error) => {
			if (error.response.status === 401) {
				localStorage.removeItem("user");
				localStorage.setItem("isLoggedIn", false);
			}
		});
	return { get_user, message };
};

const getElements = async (element) => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.get(url + element, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = "Obtingut amb èxit";
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "No s'han trobat";
			}
		})
		.catch((error) => {
			console.log(error);
		});

	return { result, message };
};

const getElement = async (element, key) => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.get(url + element + "/" + key, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = "Obtingut amb èxit";
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = "No s'han trobat";
			}
		})
		.catch((error) => {
			console.log(error);
		});

	return { result, message };
};

const updateElement = async (element, key, values) => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + element + "/" + key, values, config)
		.then((response) => {
			console.log(response);
			if (response.status === 200) {
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message };
};

const addElement = async (element, values) => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + element, values, config)
		.then((response) => {
			console.log(response);
			if (response.status === 200) {
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message };
};

const deleteElement = async (element, key) => {
	const user = JSON.parse(localStorage.getItem("user"));
	let message;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.delete(url + element + "/" + key, config)
		.then((response) => {
			console.log(response);
			if (response.status === 200) {
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message };
};

const assignarGrups = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = { torneig_id: 1, maxim_parelles_grup: 4 };
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "assignar-grups", values, config)
		.then((response) => {
			console.log(response);
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const generarPartits = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = { torneig_id: 1 };
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "generar-partits", values, config)
		.then((response) => {
			console.log(response);
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const generarHoraris = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = { torneig_id: 1 };
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "generar-horaris", values, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const generarHorarisFinals = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = { torneig_id: 1, tipus_hora_id: 2 };
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "generar-horaris-finals", values, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const crearHoresFinals = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = { torneig_id: 1, numero_finalistes: 16 };
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "crear-hores-finals", values, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const generarPartitsFinals = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = { torneig_id: 1, finalistes: [], numero_finalistes: 16 };
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "generar-partits-finals", values, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const canviHoraPartit = async (hora_origen_id, hora_desti_id) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const values = {
		hora_origen_id: hora_origen_id,
		hora_desti_id: hora_desti_id,
	};
	let message;
	let result;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};
	await axios
		.post(url + "canviHoraPartit", values, config)
		.then((response) => {
			if (response.status === 200) {
				result = response.data.data;
				message = response.data.message;
			}
			if (
				response.data.status === "failed" &&
				response.data.success === undefined
			) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message, result };
};

const createTorneig = async (values) => {
	const user = JSON.parse(localStorage.getItem("user"));

	const data = new FormData();

	data.append("nom", values.nom);
	data.append("descripcio", values.descripcio);
	data.append("club_id", values.club_id);
	data.append("modalitat_id", values.modalitat_id);
	data.append("preu_inscripcio", values.preu_inscripcio);
	data.append("nivells", JSON.stringify(values.nivells));
	data.append("data_inici", moment(values.data_inici).format("YYYY-MM-DD"));
	data.append("data_final", moment(values.data_final).format("YYYY-MM-DD"));
	if (values.cartell[0]?.name) {
		data.append("cartell", values.cartell[0]);
	}

	let message;
	let torneig;

	let config = {
		headers: {
			"Content-Type": "multipart/form-data",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};

	await axios.post(url + "tornejos", data, config).then((response) => {
		if (response.status === 200) {
			message = "Torneig creat";
			torneig = response.data.torneig;
		}
		if (
			response.data.status === "failed" &&
			response.data.success === undefined
		) {
			message = "Error al crear";
		}
	});

	return { message, torneig };
};

const updateClub = async (values, id) => {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(values);
	const data = new FormData();

	data.append("nom", values.nom);
	data.append("email_contacte", values.email_contacte);
	data.append("adreca", values.adreca);
	data.append("codi_postal", values.codi_postal);
	data.append("nif", values.nif);
	data.append("pais", values.pais);
	data.append("poblacio", values.poblacio);
	data.append("rao", values.rao);
	data.append("telefon", values.telefon);
	if (values?.avatar?.[0]?.name) {
		data.append("avatar", values.avatar[0]);
	}

	let message;

	let config = {
		headers: {
			"Content-Type": "multipart/form-data",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};

	await axios.post(url + "club/" + id, data, config).then((response) => {
		if (response.status === 200) {
			message = "Club actualitzat";
		}
		if (
			response.data.status === "failed" &&
			response.data.success === undefined
		) {
			message = "Error al actualitzar";
		}
	});

	return message;
};

const updateUser = async (values, id) => {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(values);
	const data = new FormData();

	data.append("name", values.name);
	data.append("telefon", values.telefon);
	if (values?.avatar?.[0]?.name) {
		data.append("avatar", values.avatar[0]);
	}

	let message;

	let config = {
		headers: {
			"Content-Type": "multipart/form-data",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + user?.token,
		},
	};

	await axios.post(url + "user/" + id, data, config).then((response) => {
		if (response.status === 200) {
			message = "Usuari actualitzat";
			// localStorage.setItem("user", JSON.stringify(response.data));
		}
		if (
			response.data.status === "failed" &&
			response.data.success === undefined
		) {
			message = "Error al actualitzar";
		}
	});

	return { message };
};

export {
	Login,
	registreAdministrador,
	registreJugador,
	getUser,
	logout,
	getElements,
	getElement,
	updateElement,
	addElement,
	deleteElement,
	assignarGrups,
	generarPartits,
	generarHoraris,
	generarHorarisFinals,
	canviHoraPartit,
	createTorneig,
	crearHoresFinals,
	generarPartitsFinals,
	updateClub,
	updateUser,
};
