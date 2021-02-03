class GameTile:
    def __init__(self, catId, title, clues):
        self.catId = catId  # The question category
        self.title = title  # The point value of this question
        self.clues = clues

    # def __str__(self):  # This method creates a string representation of this object
    #     # Let's store all of our properties in a dict object
    #     result = {'category': self.category,
    #               'points': self.points,
    #               'question': self.question,
    #               'answer': self.answer}

    #     # Now we can convert the dict to a string which will give us friendly formatting
    #     return str(result)

    # def __repr__(self):
    #     # This method also creates a String representation of a Python object
    #     # The Python debugger calls this method rather than __str__
    #     # But we can just reuse our code by calling __str__
    #     return self.__str__()
