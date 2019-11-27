from words.models import WordCard

dog = WordCard(en='Dog', th='หมา', ch='狗', category='Animal', user='GUEST')
dog.save()
cat = WordCard(en='Cat', th='แมว', ch='貓', category='Animal', user='GUEST')
cat.save()
ant = WordCard(en='Ant', th='มด', ch='螞蟻', category='Animal', user='GUEST')
ant.save()

apple = WordCard(en='Apple', th='แอปเปิ้ล', ch='蘋果',
                 category='Fruit', user='GUEST')
apple.save()
papaya = WordCard(en='Papaya', th='มะละกอ', ch='番木瓜',
                  category='Fruit', user='GUEST')
papaya.save()
banana = WordCard(en='Banana', th='กล้วย', ch='香蕉',
                  category='Fruit', user='GUEST')
banana.save()
orange = WordCard(en='Orange', th='ส้ม', ch='橙子',
                  category='Fruit', user='GUEST')
orange.save()

red = WordCard(en='Red', th='แดง', ch='紅色',
               category='Color', user='GUEST')
red.save()
yellow = WordCard(en='Yellow', th='เหลือง', ch='黃色',
                  category='Color', user='GUEST')
yellow.save()
green = WordCard(en='Green', th='เขียว', ch='綠色',
                 category='Color', user='GUEST')
green.save()
