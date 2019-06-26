*11612733 杜子豪*

* **2.2——**

* 27.

  * a.

    $\frac{x^2+3y^2}{2xy}=\frac{1+3(\frac yx)^2}{2(\frac yx)}​$

    Thus this equation is homogeneous

  * b.

    Let $y=xv(x)$

    Hence $\frac{dy}{dx}=v+xv'=\frac{1+3v^2}{2v}\Rightarrow \frac{dv}{dx}=\frac{1+v^2}{2xv}\Rightarrow \frac {2v}{1+v^2}dv=\frac{dx}x$

    Thus $d(\ln|1+v^2|)=d(\ln x)\Rightarrow 1+v^2=cx$ where $c$ is an arbitrary constant

    Since $v^2=y^2/x^2, \;x^2+y^2=cx^3$

    

* 29.

  * a.

    $\frac{4x+3y}{2x+y}=\frac{4+3\frac yx}{2+\frac yx}$

    Thus this equation is homogeneous

  * b.

    Let $y=xv(x)​$

    Hence $\frac{dy}{dx}=v+xv'=-\frac{4+3v}{2+v}\Rightarrow\frac{xdv}{dx}=-\frac{v^2+5v+4}{2+v}\Rightarrow\frac{v+2}{(v+1)(v+4)}dv=-\frac{dx}x$

    Thus $\frac13[d(\ln|v+1|+2d(\ln|v+4|)]=-d\ln|x|\Rightarrow (v+1)(v+4)^2x^3=c$ where $c$ is an arbitrary constant

    Since $v=y/x,\;(x+y)(4x+y)=c$

    

* **2.4——**

* 1.

  Change the form of equation, we get $y'+\frac{\ln t}{t-3}y=\frac{2t}{t-3}$

  Hence, $t\in(0,3)\cup(3,+\infty)$

  Since $y(1)=2$, $0<t<3$

  

* 3.

  Change the form of equation, we get $y'+\frac{2t}{4-t^2}y=\frac{3t^2}{4-t^2}$

  Hence, $(-\infty,-2)\cup(-2,2)\cup(2,+\infty)$

  Since $y(-3)=1,\;t<-2$

  

* 5.

  Denote $f(t,y)=\sqrt{1-t^2-y^2}$

  $\partial f/\partial y=-\frac{2}{2\sqrt{1-t^2-y^2}}$

  Hence, $1-t^2-y^2>0$ which is $y^2+t^2<1$

  

* 7.

  Denote $f(t,y)=(t^2+y^2)^{\frac32}$

  $\partial f/\partial y=6y\sqrt{t^2+y^2}$

  Hence, $y^2+t^2\geq0$, which is everywhere in the $ty$-plane

  

* 9.

  $y'=-4t/y\Rightarrow ydy=-4tdt\Rightarrow\frac12y^2=-2t^2+c\Rightarrow y^2+4t^2=c$ where $c$ is an arbitrary constant

  Since $y(0)=y_0,\;c=y_0^2,\;y=\pm\sqrt{y_0^2-4t^2}$ where $y_0\not=0$ and $4t^2<y_0^2$ which is $-\frac{|y_0|}2<t<\frac{|y_0|}2$

  

* 11.

  $y’+y^3=0\Rightarrow \frac{dy}{y^3}=-dt\Rightarrow\frac12y^{-2}=t+\frac12c\Rightarrow y^{-2}=2t+c$ where $c$ is an arbitrary constant

  Since $y(0)=y_0,\;c=y_0^{-2},\;y=\frac{y_0}{\sqrt{2ty_0^2+1}}$ where $t>-\frac1{2y_0^2}$ for $y_0\not=0$; $t\in\R$ for $y_0=0$  

  

* 18.

  * a.

    $(1-t)'=-1,\;\frac{-t+\sqrt{t^2+4(1-t)}}{2}=\frac{-t+|t-2|}{2}$

    Thus $y_1(t)=1-t$ is a solution which valid when $t\geq2$

    $(-t^2/4)'=-t/2,\;\frac{-t+\sqrt{t^2-t^2}}2=-t/2$

    Thus $y_2(t)=-t^2/4$ is a solution and valid for $\forall t\in\R$

  * b.

    Denote $f(t,y)=\frac{-t+\sqrt{t^2+4y}}2$

    $\partial f/\partial y=\frac1{\sqrt{t^2+4y}}$, thus when $t^2+4y=0$, $f_y$ is not continuous

    However $4y_1​$ 

* 24.

  Let $v=y^{-1},dv/dt=-y^{-2}dy/dt,\;y'y^{-2}=ry^{-1}-k\Rightarrow-v'=rv-k\Rightarrow \frac{dv}{v-\frac kr}=-rdt$

  Thus $v=ce^{-rt}+\frac kr$ where $c$ is an arbitrary constant

  Hence $y=\frac r{cre^{-rt}+k}$ where $c$ is an arbitrary constant

  

* 25.

  Let $v=y^{-2},\;dv/dt=-2y^{-3}dy/dt,\;y'y^{-3}=\epsilon y^{-2}-\sigma\Rightarrow-\frac12v'=\epsilon v-\sigma\Rightarrow\frac{dv}{v-\frac{\sigma}{\epsilon}}=-2\epsilon dt$

  Thus $v=ce^{-2\epsilon t}+\frac{\sigma}{\epsilon}$ where $c$ is an arbitrary constant

  Hence $y=\pm(\frac{\epsilon}{c\epsilon e^{-2\epsilon t}+\sigma})^{\frac12}$ where $c$ is an arbitrary constant

  

* **Riccati Equations——**

* 26.

  * a.

    $y'=1+t^2-2ty+y^2=q_1(t)+q_2(t)y+q_3(t)y^2​$

    Thus $q_1(t)=1+t^2,\;q_2(t)=-2t,\;q_3(t)=1​$

    $dv/dt=-(-2t+2t)v-1=-1​$ which implies $v=-t+c​$ where $c​$ is an arbitrary constant

    Hence $y=t+\frac1{c-t}$ where $c$ is an arbitrary constant

  * b.

    $y'=-\frac1{t^2}-\frac yt+y^2=q_1(t)+q_2(t)y+q_3(t)y^2$

    Thus $q_1(t)=-\frac1{t^2},\;q_2(t)=-\frac1t,\;q_3(t)=1$

    $dv/dt=-(-\frac1t+\frac2t)v-1=-\frac vt-1$ which implies $v=\frac{c-t^2}{2t}$ where $c$ is an arbitrary constant

    Hence $y=\frac1t+\frac {2t}{c-t^2}$ where $c$ is an arbitrary constant

