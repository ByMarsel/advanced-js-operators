import { users, subjectsSchedule, subjectTranslations } from "./data.js";

// Домашнее задание

/* Задание 1
/* Напишите код который из массива users соберет и вернет объект со следующими свойствами:
/* - userID
/* - userName
/* - email
/* - location
/* - avatarURL
/* - для этого используйте деструктуризацию, и вложенную деструктуризацию
*/

// Решение: 
const newUsers = users.map((user) => {
  const {
    userID,
    userName,
    email,
    profile: { location, avatarURL },
  } = user;
  return { userID, userName, email, location, avatarURL };
});

/* Задание 2
/* Проитеируйтесь по массиву users и выведите в консоль следующие свойства:
/* - userName
/* - email
/* - location
/* - для вывода консоль воспользуйтесь шаблоном: Имя пользователя: {userName}, email: {email}, статус уведомлений: {notificationStatus}
/* - не у всех включены уведомления на почту. Если уведомления включены выведите в консоль "уведомления включены" иначе "уведомления выключены", для этого используйте тернарный оператор. 
/* - при деструктуризации, может получится так что переменная с email уже есть, придумайте как избежать этой ошибки, например используя псевдонимы
*/

users.forEach(
  ({
    userName,
    email,
    settings: {
      notificationPreferences: { email: emailNotifications },
    },
  }) => {
    console.log(
      `Имя пользователя: ${userName}, email: ${email}, статус уведомлений: ${
        emailNotifications ? "уведомления включены" : "уведомления выключены"
      }`
    );
  }
);

/* Задание 3
/* Получившийся объект в первом задании, объедините с объектом socialLinks и достаньтe language из settings. На выходе должен получиться объект со следующими свойствами:
/* - userID
/* - userName
/* - email
/* - location
/* - avatarURL
/* - bio
/* - facebook
/* - twitter
/* - instagram
/* - language - обратите внимание что это свойство находится в settings и может быть не у всех пользователей
/* - для этого используйте вложенную деструктуризацию и spread оператор
*/

// Решение: 
const newUsers2 = users.map(
  ({
    userID,
    userName,
    email,
    profile,
    settings: { language = "English" },
  }) => ({ userID, userName, email, ...profile, language })
);

/* Задание 4
/* Проитерируйтесь по массиву users и соберите массив с любимыми песнями каждого пользователя. На выходе должен получиться массив вида:
/* [{ artist: "The Beatles", song: "Let It Be" }, ...]
/* - для этого используйте spread оператор 
/* - используйте вложенную деструктуризацию в параметрах функции и rest оператор
/* - используйте метод reduce
/* - на каждую итерацию возвращайте новый массив объединённый с accumulator например: [...acc, ...favoriteSongs]
*/

// Решение: 
const newUsers3 = users.reduce(
  (
    acc,
    {
      preferences: {
        music: { favoriteSongs },
      },
    }
  ) => {
    return [...acc, ...favoriteSongs];
  },
  []
);

/* Задание 5
/* Проитерируйтесь по массиву users и соберите массив с последней прослушанной песней каждого пользователя. На выходе должен получиться массив вида:
/* [{ artist: "The Beatles", song: "Yesterday", playDate: "2024-01-10" }, ...]
/* - для этого используйте spread оператор
/* - используйте вложенную деструктуризацию в параметрах функции и rest оператор
/* - используйте метод map
*/

// Решение: 
const newUsers4 = users.map(
  ({
    preferences: {
      music: {
        recentlyPlayed: [last],
      },
    },
  }) => last
);

console.log(newUsers4);

/* Задание 6
/* Проитерируйтесь по массиву subjectsSchedule и деструктурируйте только чётные дни (вторник, четверг, суббота). 
/* - Суббота отсутствует в массиве, но должна быть в результате. Воспользойтесь значениями по умолчанию
*/

// Решение: 
const [, tuesday, , thursday, , saturday = ["Труды"]] = subjectsSchedule;

/* Задание 7
/* Достаньте расписание для понедельника из subjectsSchedule и переведите названия предметов. Для перевода используйте объект subjectTranslations.
/* - Для перевода воспользуйтесь вычисляемыми свойствами
/* - Перевода может и не быть в объекте subjectTranslations, в этом случае используйте оригинальное название. Воспользуйтесь оператором нулевого слияния (nullish coalescing operator) ??
*/

// Решение: 
const [monday] = subjectsSchedule;
const translatedMonday = monday.map(
  (subject) => subjectTranslations[subject] ?? subject
);


/* Задание 8
/* Задачка про то как скопировать вложенный массив или объект.
*/