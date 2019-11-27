from user.models import WordCard, Catagory, User

user1 = User(userName='user1')
user1.save()

animal = Catagory(catName='animal', user=user1)
animal.save()

dog = WordCard(en='dog', th='หมา', ch='狗', catagory=animal)
dog.save()
cat = WordCard(en='cat', th='แมว', ch='貓', catagory=animal)
cat.save()
ant = WordCard(en='ant', th='มด', ch='螞蟻', catagory=animal)
ant.save()
