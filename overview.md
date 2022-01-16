# CodeX Academy

## Level Overview

{% for level in site.levels %}

![Level {{level.number}} badge]({{level.badge_image}})

### {{level.category}} {{ level.number }} 

{{ level.description | markdownify }}

[view pathway]({{level.pathway}})

#### Skills:

{% for skill in level.skills %}
- {{skill.skill}}{% endfor %}
{% endfor %}



