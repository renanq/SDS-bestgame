import moment from 'moment';

export const formatDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
};

export const formatDateFilter = (date: string) => {
    let data = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DDTHH:MM:SSZ');
    data = data.replace("-03:00", "Z");
    data = data.replace(":", "%3A");
    data = data.replace(":", "%3A");
    return data;
}