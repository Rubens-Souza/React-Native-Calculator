const StringUtils = {
    Empty: "",
    Espace: " ",
    getDefaultIfBlank: (value, defaultValue="") => {
        return !value || value === StringUtils.Empty || value === " " ? defaultValue : value;
    },
    getDefaultIfEmpty: (value, defaultValue="") => {
        return !value || value === StringUtils.Empty ? defaultValue : value;
    },
};

export default StringUtils;