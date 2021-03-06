import axios from "axios";
import cookies from "next-cookies";

export const getDates = async (saveValuesDates, changeNumLights, ctx, calendar = "", range = 0, light = '', id = '') => {
    const url = "/api/user";
    const { authorization, userId } = cookies(ctx);
    const date = calendar.split('-').map(date => parseInt(date))
    const fetchDate = {
        year: date[0],
        month: date[1],
        day: date[2]
    }

    const response = await axios.post(
        url,
        { 
            userId: id === '' ? userId : id,
            fetchDate,
            range,
            light,
        },
        {
            headers: {
                authorization,
            },
        }
    );

    changeNumLights(response.data.lightNum)
    saveValuesDates({ dates: response.data.dates });
};
