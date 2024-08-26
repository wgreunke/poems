import streamlit as st

#This is the main streamlit app.  It takes in a set of poems and images and then shows them on the web.
#A button allows you to advance to the next poem.  #Goal is to get two pages to see how navigation looks.

#This is the core data that will be used for example.
keywords=["knife","Apple","Table"]
#Target is the language that you want to learn.
#Base is your current language.
target_lines=["This is first line of target",
             "This is second line of target",
             "This is third line of target",
             "This is fourth line of target",]
base_lines=["Base poem translation",
            
           "Second line translate",
           "Third line",
           "Fourth line"]

st.markdown(f"{target_lines[0]}<br>:red{base_lines[0]}",unsafe_allow_html=True )

st.title("Let's Learn German!")
#Create a for loop that iterates throught the poems
for target_line, base_line in zip(target_lines,base_lines):
  st.markdown(target_line)
  st.markdown(f":gray[{base_line}]")


st.markdown(f"{line1}<br>{line2}",unsafe_allow_html=True )



st.write("What are the advantages of this method?")

st.markdown("*Streamlit* is **really** ***cool***.")
st.markdown('''
    :red[Streamlit] :orange[can] :green[write] :blue[text] :violet[in]
    :gray[pretty] :rainbow[colors] and :blue-background[highlight] text.''')
st.markdown("Here's a bouquet &mdash;\
            :tulip::cherry_blossom::rose::hibiscus::sunflower::blossom:")

multi = '''If you end a line with two spaces,
a soft return is used for the next line.

Two (or more) newline characters in a row will result in a hard return.
'''
st.markdown(multi)

