import { useFormik } from "formik";

const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
        initialValues: {
            blogTitle: "",
            blogBody: "",
            blogAuthor: "",
        },
        validationSchema: blogValidationSchema,
        onSubmit: (values) => {
            axios.post("http://localhost:8000/blogs", values);
            resetForm()
            navigation('/')
        },
    });
