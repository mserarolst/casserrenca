import * as yup from "yup";

const SchemaRes = () => {
	// const { t } = () => {};
};

const schemaTorneig = yup.object({
	nom: yup.string().required("El nom del torneig és obligatori"),
	preu_inscripcio: yup.string().required("El preu és obligatori"),
	data_inici: yup
		.date("La data ha de ser vàlida")
		.required("Les data d'inici és obligatòria"),
	data_final: yup
		.date("La data ha de ser vàlida")
		.required("Les data de final és obligatòria"),
	categories: yup
		.array()
		.min(1, "Has de seleccionar al menys una categoria i un nivell"),
});

const schemaClub = yup.object({
	nom: yup.string().required("El nom del torneig és obligatori"),
	email_contacte: yup
		.string()
		.email("Ha de ser un correu vàlid")
		.required("El correu és obligatori"),
	telefon: yup.string().required("El telèfon és obligatòri"),
	rao: yup.string().required("La Raó Social és obligatòria"),
	adreca: yup.string().required("L'adreça és obligatòria"),
	codi_postal: yup.string().required("El codi postal és obligatòri"),
	pais: yup.string().required("El país és obligatòri"),
});

export { SchemaRes, schemaTorneig, schemaClub };
