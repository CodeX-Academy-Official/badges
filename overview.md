# CodeX Academy

## Level Overview

{% for level in site.levels %}

### {{level.category}} {{ level.number }} 

{{ level.description | markdownify }}

<a href="{{level.pathway}}" target="_blank">
    <img align="right" src="{{level.badge_image}}" alt="Level {{level.number}} badge" width="150"/>
</a>


#### Skills:

{% for skill in level.skills %}
- {{skill.skill}} {% for url in skill.badges %}[badge]({{url}}){% endfor %}{% endfor %}
{% endfor %}



