import json

class Solution:
    def sum_number_in_string(self, number_string: str) -> int:
        a = 0
        for i in number_string:
            a = a + int(i)
        return a

    def get_leader_string(self, steps: int) -> str:
        string = ''
        for i in range(steps):
            string += ((steps - (i + 1)) * ' ') + ('#' * (i + 1) + '\n')
        return string
        pass

    def to_json(self, func):
        def wrapped(*args, **kwargs):
            return json.dumps(func(*args, **kwargs))
        return wrapped
      
def get_spiral_number_matrix(self, number):
        # Подсчитываем кол-во списков
        count = 1
        tmp = number - 1
        while not tmp == 0:
            count += 2
            tmp -= 1
        # Создаем список для строк и столбцов

        RowsCount = int(count/2) + 1
        ColsCount = int(count/2)
        RowsList = list()
        ColsList = list()

        # Заполняем списки пустыми списками
        for  i in range(RowsCount):
            RowsList.append(list())
        for i in range(ColsCount):
            ColsList.append(list())

        # Определяем общее кол-во элементов в списках
        countInList = list()
        countInList.append(number)
        tmp = number-1
        isEven = False
        for i in range(count - 1):
            countInList.append(tmp)
            if isEven:
                tmp-=1
                isEven = False
            else:
                isEven = True

        # Заполняем списки
        value = 1
        RowsIter = 0
        ColsIter = 0
        isEven = True
        for i in range(count):
            for j in range(countInList[i]):
               if isEven:
                   RowsList[RowsIter].append(value)
               else:
                   ColsList[ColsIter].append(value)
               value += 1
            if isEven:
                RowsIter+=1
                isEven = False
            else:
                ColsIter+=1
                isEven = True
        test = 2

        




# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    solution = Solution()
    print(solution.sum_number_in_string('4212'))
    
    print(solution.get_leader_string(5))
    
    @solution.to_json
    def get_data():
        return {
            'data': 42
        }

    print(get_data())

    solution.get_spiral_number_matrix(4)


     
