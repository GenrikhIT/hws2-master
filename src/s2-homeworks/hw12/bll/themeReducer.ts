// Определяем типы
type ThemeState = {
  themeId: number;
};

type ChangeThemeAction = {
  type: "SET_THEME_ID";
  id: number;
};

// Начальное состояние
const initState: ThemeState = {
  themeId: 1,
};

// Редюсер
export const themeReducer = (
  state = initState,
  action: ChangeThemeAction
): ThemeState => {
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: action.id }; // Обновляем themeId
    default:
      return state;
  }
};

// Действие для изменения themeId
export const changeThemeId = (id: number): ChangeThemeAction => ({
  type: "SET_THEME_ID",
  id,
});
