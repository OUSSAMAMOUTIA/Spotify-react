export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//   token:
    // "BQCK2xplPjOmJUWJZzjrW_tk7oVmlqx5P-ieC-TZ5id7-m2qLmymHfqk5OYCF97x3Lk6yUKX1bs1t_DHV8P1dn3U7ntaL0Tiifm934xBO2N21_gESvDkoAvp4jnon0cN-dSKJWqFNtb8QmsOaQC-Ykfo1JjxAO6Gv_-dzWcFygEEWqrz",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
        return {
            ...state,
            playlists: action.playlists,
        }
    case "SET_RANDOM_MUSICS":
        return {
            ...state,
            random_musics: action.random_musics,
        }
        case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };
      
          case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
    default:
      return state;
  }
};

export default reducer;
