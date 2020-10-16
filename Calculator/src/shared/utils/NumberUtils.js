const NumberUtils = {
    isNumber: (string) => !Number.isNaN(parseFloat(string)),
};

export default NumberUtils;