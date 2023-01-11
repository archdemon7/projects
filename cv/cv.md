# Artsiom Vakulski

### Contacts
* Country: Belarus
* City: Brest
* Email: vakylskij@gmail.com
* Telegram: [archdemon7](https://t.me/archdemon7)
* GitHub: [archdemon7](https://github.com/archdemon7)
* Discord: archdemon#0138

------------------

### About me
I am a system administrator. I enrolled in this course because I want to change 
my occupation to Frontend developer. I have experience working with HTML, CSS, Python.
I am currently taking courses on the Django framework.

------------------

### Skills
* HTML
* CSS
* Figma
* Python
* Django
* Windows Server
* Bash
* Editors: VSCode, WebStorm

------------------

### Code example
**Delete occurrences of an element if it occurs more than n times.**
*Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].*
```
def delete_nth(order,max_e):
    m = order[::-1]

    for i in order:
        while m.count(i) > max_e:
            m.remove(i)
    return m[::-1]
```

------------------

### Education
* University: Brest State Technical University
* BeeGeek:
    * Python: [course for beginners](https://stepik.org/cert/1486699)
    * Python: [advanced course](https://stepik.org/cert/1519345)
* Rolling Scopes School: [JavaScript/Front-end Course. Stage 0 by RS School](https://wearecommunity.io/events/js-stage0-rs-2022q2) (in process…)

------------------

### Language
* Russian - native
* English - A1