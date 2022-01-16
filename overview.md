# CodeX Academy

## Level Overview

{% for level in site.levels %}
### {{level.category}} {{ level.number }} 

{{ level.description | markdownify }}

#### Skills:

{% for skill in level.skills %}
- {{skill.skill}}{% endfor %}
{% endfor %}



