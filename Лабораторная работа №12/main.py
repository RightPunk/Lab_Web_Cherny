import random
class  Character:
    STAMINA = 80
    ATTACK = 5
    DEFENCE = 10
    SPECIAL = "Удача"
    SPECIAL_STRENGHT = 15
    def __init__(self, name):
        self.name = name

    def attack(self):
        return f"{self.name} атакует цель и наносит {self.ATTACK} единиц урона!"
    def defence(self):
        return f"{self.name} блокирует {self.DEFENCE} единиц урона!"
    def special(self):
        return f"{self.name} использует специальный прием \"{self.SPECIAL}\"!"
    def __str__(self):
        return f'{self.__class__.__name__} - приключенец. '


class Warrior(Character):
    SPECIAL = "Выносливость"
    SPECIAL_STRENGHT = Character.STAMINA + 25
    def __init__(self, name):
        Character.__init__(self, name)
    def __str__(self):
        return f'Warrior - дерзкий воин ближнего боя. Сильный, выносливый и отважный.'

    def attack(self):
        return f"{self.name} нанёс противнику урон, равный {self.ATTACK  + random.randint(3, 5)}."

    def defence(self):
        return f"{self.name} блокировал {self.DEFENCE  + random.randint(5, 10) } ед. урона."

    def special(self):
        return f"{self.name} применил специальное умение {self.SPECIAL} {self.SPECIAL_STRENGHT}."


class Mage(Character):
    SPECIAL = "Атака"
    SPECIAL_STRENGHT = Character.ATTACK + 40
    def __init__(self, name):
        Character.__init__(self, name)

    def attack(self):
        return f"{self.name} нанёс противнику урон, равный {self.ATTACK + random.randint(5, 10)}."

    def defence(self):
        return f"{self.name} блокировал {self.DEFENCE + random.randint(-2, 2)} ед. урона."

    def special(self):
        return f"{self.name} применил специальное умение {self.SPECIAL} {self.SPECIAL_STRENGHT}."

    def __str__(self):
        return f'Mage - находчивый воин дальнего боя. Обладает высоким интеллектом.'

class Healer(Character):
    SPECIAL = "Защита"
    SPECIAL_STRENGHT = Character.DEFENCE + 30
    def __init__(self, name):
        Character.__init__(self, name)
    def attack(self):
        return f"{self.name} нанёс противнику урон, равный {self.ATTACK + random.randint(-3,-1)}."
    def defence(self):
        return f"{self.name} блокировал {self.DEFENCE + random.randint(2,5)} ед. урона."
    def special(self):
        return f"{self.name} применил специальное умение {self.SPECIAL} {self.SPECIAL_STRENGHT}."
    def __str__(self):
        return f'Healer - могущественный заклинатель. Черпает силы из природы, веры и духов.'

    if __name__ == '__main__':
        healer = Healer('WarRUSIANO')
        print(healer)
        print(healer.attack())

