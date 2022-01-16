# CodeX Academy

## Level Overview

{% for level in site.levels %}

<img src="{{level.badge_image}}" alt="Level {{level.number}} badge" width="150"/>

### {{level.category}} {{ level.number }} 

{{ level.description | markdownify }}

[view pathway]({{level.pathway}})

#### Skills:

{% for skill in level.skills %}
- {{skill.skill}} {% for badge in level.badges %}[badge]({{badge}}){% endfor %}{% endfor %}
{% endfor %}



