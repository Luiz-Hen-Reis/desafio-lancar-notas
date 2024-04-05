export function formatarData(dataString: string) {
    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    return `${addZero(dia)}/${addZero(mes)}/${ano}`;
}

const addZero = (n: number) => n > 10 ? n : `0${n}`;