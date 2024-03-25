import {apiService} from "./apiService";
import {urls} from "../constants";
import {ISelectedWatchMovie, IUserInfo, IWatchList} from "../interfaces";
import {IRes} from "../types";

const accountService = {
    getUserDetails: (accountId: number): IRes<IUserInfo> => apiService.get(urls.account.userInfo(accountId)),

    getWatchList: (accountId: number): IRes<IWatchList> => apiService.get(urls.account.watchlist(accountId) + '/movies'),
    postMovieToWatchList: (accountId: number, watchMovie: ISelectedWatchMovie): IRes<void> => apiService.post(urls.account.watchlist(accountId), watchMovie),


}

export {accountService};